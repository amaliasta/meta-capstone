import {
    render,
    screen,
    act,
    waitFor,
} from "@testing-library/react";
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

const invalidFormState = {
    resDate: invalidMaxDate,
    guests: "",
    occasion: "",
    resTime: "",
};

const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test("Renders the BookingForm", () => {
    const { getByText } = render(
        <BookingForm
            formState={formState}
            times={times}
            setFormState={() => {}}
            setTimes={() => {}}
        />
    );

    const labelElement = getByText(
        "Choose date (only today and next four days)"
    );
    expect(labelElement).toBeTruthy();
});

test("Submits the booking form", async () => {
    render(<Main />);

    // Simulate user interactions: Fill in the form fields
    const dateInput = screen.getByTestId("select-date");
    act(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        userEvent.clear(dateInput);
        userEvent.type(dateInput, currentDate);
    });

    act(() => userEvent.type(screen.getByTestId("select-guests"), "2"));
    act(() =>
        userEvent.selectOptions(
            screen.getByTestId("select-occasion"),
            "Anniversary"
        )
    );

    // Wait for options to appear
    await waitFor(() => {
        const customOption = screen.getAllByTestId("time-option");
        expect(customOption).toBeTruthy();
    });

    act(() =>
        userEvent.selectOptions(screen.getByTestId("select-time"), "18:00")
    );
    act(() => {
        userEvent.click(screen.getByTestId("submit"));
    });

    await waitFor(() => {
        const confirmationSection = screen.queryByTestId("confirmation");
        expect(confirmationSection).toBeTruthy();
    });
});



describe("BookingForm Component", () => {
    it("should have correct HTML5 attributes for date input", async () => {
        render(
            <BookingForm
                formState={formState}
                times={times}
                setFormState={() => {}}
                setTimes={() => {}}
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
                times={times}
                setFormState={() => {}}
                setTimes={() => {}}
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
                times={times}
                setFormState={() => {}}
                setTimes={() => {}}></BookingForm>
        );

        act(() => {
            userEvent.type(screen.getByTestId("select-date"), "2023-09-30");
            userEvent.click(screen.getByTestId("select-time"));
        });

        await waitFor(() => {
            const errorElement = screen.getByText(
                "reservations can only be made 5 days before"
            );
            expect(errorElement).toBeTruthy();
        });
    });

    // it("checks that date field validation shows error when invalid date is entered", async () => {
    //     render(
    //         <BookingForm
    //             formState={formState}
    //             times={times}
    //             setFormState={() => {}}
    //             setTimes={() => {}}></BookingForm>
    //     );

    //     act(() => {
    //         userEvent.click(screen.getByTestId("submit"));
    //     });

    //     await waitFor(() => {
    //         const errorElement = screen.getByText(
    //             "reservations can only be made 5 days before"
    //         );
    //         expect(errorElement).toBeTruthy();
    //     });
    // });
});


test("Disables booking form submit button", async () => {
    render(<Main />);

    // Simulate user interactions: Fill in the form fields
    const dateInput = screen.getByTestId("select-date");
    act(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        userEvent.clear(dateInput);
        userEvent.type(dateInput, currentDate);
    });

    act(() => userEvent.type(screen.getByTestId("select-guests"), "0"));
    act(() =>
        userEvent.selectOptions(
            screen.getByTestId("select-occasion"),
            "Anniversary"
        )
    );

    // Wait for options to appear
    await waitFor(() => {
        const customOption = screen.getAllByTestId("time-option");
        expect(customOption).toBeTruthy();
    });

    act(() =>
        userEvent.selectOptions(screen.getByTestId("select-time"), "18:00")
    );
    act(() => {
        userEvent.click(screen.getByTestId("submit"));
    });

    act(() => {
        const confirmationSection = screen.queryByTestId("confirmation");
        expect(confirmationSection).not.toBeTruthy();
    });
});