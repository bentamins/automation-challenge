import App from './App.js';
import {cleanup, fireEvent, render} from '@testing-library/react';

it('required fullname', () => {
    const app = render(<App />);

    const saveButton = app.getByText("Save");

    fireEvent.click(saveButton);

    expect(app.getByText("*Please enter your full name.")).toBeTruthy();

});


it('invalid email', () => {
  const app = render(<App />);

  const emailElement = app.queryByLabelText("Email");

  fireEvent.change(emailElement, {
    target: {value: 'invalidemail'},
  });

  const saveButton = app.getByText("Save");

  fireEvent.click(saveButton);

  expect(app.getByText("*Please enter a valid email.")).toBeTruthy();

});

it('required days of availability', () => {
  const app = render(<App />);

  const flexibleElement = app.queryByLabelText("Flexible");

  fireEvent.change(flexibleElement, {
    target: {value: false},
  });

  const saveButton = app.getByText("Save");

  fireEvent.click(saveButton);

  expect(app.getByText("*Please enter days for availability.")).toBeTruthy();

});