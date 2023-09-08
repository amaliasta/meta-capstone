import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";
import Main from "./Main";

const formState = {
    resDate: new Date().toISOString().split("T")[0],
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

    const labelElement = getByText("Choose date");
    expect(labelElement).toBeTruthy();
});

test("Submits the booking form", async () => {
    render(<Main />);

    // Simulate user interactions: Fill in the form fields
    const dateInput = screen.getByTestId("select-date");
    act(() => {
        const currentDate = new Date().toISOString().split("T")[0]
        userEvent.clear(dateInput);
        userEvent.type(dateInput, currentDate);
        console.log(currentDate);

    });

    act(() => userEvent.type(screen.getByTestId("select-guests"), "2"));
    act(() =>
        userEvent.selectOptions(
            screen.getByTestId("select-occasion"),
            "Anniversary"
        ));

    // Wait for options to appear
    await waitFor(() => {
        const customOption = screen.getAllByTestId("time-option");
        expect(customOption).toBeTruthy();
    }, 3000);

    act(() =>
        userEvent.selectOptions(screen.getByTestId("select-time"), "18:00")
    );

    userEvent.click(screen.getByTestId("submit"));
    await waitFor(() => {
        const confirmationSection = screen.queryByTestId("confirmation");
        expect(confirmationSection).toBeTruthy();
    });
});
