## Getting Started

To begin, you need to install all the dependencies for the site. To do this you need to have `Yarn` and `Node v20.9.0` installed and in the root level run the command `yarn`.

Once this is complete, run `yarn dev` to start the server and head to http://localhost:3000/.

## THE TEST

Navigate to the new page with the url 'newsletter-signup' (http://localhost:3000/newsletter-signup).

## notes

Validation
The form uses native html validation;
The required attribute is added to the email input field and the checkbox input field to mark them as required fields.
If validation fails (e.g., required fields are not filled), the form submission is prevented using e.preventDefault(), and the user is notified of the validation errors.
In the event of validation errors, the form will display error messages, indicating which fields need to be corrected.
