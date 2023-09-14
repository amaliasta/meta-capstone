import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";
import Main from "./Main";
import { toHaveAttribute } from "@testing-library/jest-dom";

const formState = {
    resDate: new Date().toISOString().split("T")[0],
    guests: "",
    occasion: "",
    resTime: "",
};

const invalidMaxDate = new Date();
invalidMaxDate.setDate(invalidMaxDate.getDate() + 9);
invalidMaxDate.setHours(23, 59, 59, 999);

const occasions = ["Anniversary", "Birthday", "Other"];

test("Renders the BookingForm", () => {
    const { getByText } = render(
        <BookingForm
            formState={formState}
            dispatchFormState={() => {}}
            occasions={occasions}
        />
    );

    const labelElement = getByText("Choose date (within 5-day range)");
    expect(labelElement).toBeTruthy();
});

test("Submits the booking form", async () => {
    render(<Main />);

    const dateInput = screen.getByTestId("select-date");
    const currentDate = new Date().toISOString().split("T")[0];

    act(() => {
        userEvent.clear(dateInput);
        userEvent.type(dateInput, currentDate);
    });

    await waitFor(() => {
        const customOption = screen.getAllByTestId("time-option");
        expect(customOption).toBeTruthy();
    });

    const selectTimeField = screen.getByTestId("select-time");
    const selectGuestsField = screen.getByTestId("select-guests");
    const selectOccasionField = screen.getByTestId("select-occasion");

    act(() => {
        userEvent.selectOptions(selectTimeField, "18:00");

        userEvent.clear(selectGuestsField);
        userEvent.type(selectGuestsField, "2");

        userEvent.selectOptions(selectOccasionField, "Anniversary");

        const submitBtn = screen.getByTestId("submit");
        expect(submitBtn).not.toHaveAttribute("disabled={true}");
        expect(screen.getByRole("option", { name: "18:00" }).selected).toBe(
            true
        );
        userEvent.click(submitBtn);
    });
    await waitFor(() => {
        const error = screen.queryByTestId("error");
        expect(error).not.toBeTruthy();
    });

    await waitFor(() => {
        const confirmation = screen.findByTestId("confirmation");
        expect(confirmation).toBeTruthy();
    });
});

describe("BookingForm Component", () => {
    it("should have correct HTML5 attributes for date input", async () => {
        render(
            <BookingForm
                formState={formState}
                dispatchFormState={() => {}}
                occasions={occasions}
            />
        );
        const dateInput = screen.getByTestId("select-date");
        expect(dateInput).toHaveAttribute("type", "date");
        expect(dateInput).toHaveAttribute("id", "resDate");
        expect(dateInput).toHaveAttribute(
            "aria-label",
            "Enter the booking date"
        );
        expect(dateInput).toHaveAttribute("aria-required", "true");
    });

    it("should have correct attributes for time select", () => {
        render(
            <BookingForm
                formState={formState}
                dispatchFormState={() => {}}
                occasions={occasions}
            />
        );
        const timeSelect = screen.getByTestId("select-time");
        expect(timeSelect).toHaveAttribute("id", "resTime");
        expect(timeSelect).toHaveAttribute(
            "aria-label",
            "Enter the booking time"
        );
        expect(timeSelect).toHaveAttribute("aria-required", "true");
    });

    it("checks that date field validation shows error when invalid date is entered", async () => {
        render(
            <BookingForm
                formState={formState}
                dispatchFormState={() => {}}
                occasions={occasions}
            />
        );

        act(() => {
            userEvent.type(screen.getByTestId("select-date"), "2023-09-30");
            userEvent.click(screen.getByTestId("select-time"));
        });

        await waitFor(() => {
            const errorElement = screen.getByText(
                "Reservations can only be made for the next 5 days"
            );
            expect(errorElement).toBeTruthy();
        });
    });
});

test("Disables booking form submit button", async () => {
    render(<Main />);

    // Simulate user interactions: Fill in the form fields
    const dateInputField = screen.getByTestId("select-date");
    const selectGuestsField = screen.getByTestId("select-guests");
    const selectOccasionField = screen.getByTestId("select-occasion");
    const currentDate = new Date().toISOString().split("T")[0];

    act(() => {
        userEvent.clear(dateInputField);
        userEvent.type(dateInputField, currentDate);

        userEvent.clear(selectGuestsField);
        userEvent.type(selectGuestsField, "0");

        userEvent.selectOptions(selectOccasionField, "Anniversary");
    });

    // Wait for options to appear
    await waitFor(() => {
        const customOption = screen.getAllByTestId("time-option");
        expect(customOption).toBeTruthy();
    });

    act(() => {
        userEvent.selectOptions(screen.getByTestId("select-time"), "18:00");
        userEvent.click(screen.getByTestId("submit"));
    });

    const confirmationSection = screen.queryByTestId("confirmation");
    expect(confirmationSection).not.toBeTruthy();
});
