import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup
    .string()
    .required("Name cannot be empty!"),
  
  email: yup
    .string()
    .required("Email tidak boleh kosong!")
    .email("Email format is invalid")
    .matches(
      /@.*\.(com|co\.id)$/,
      "Email must end with .com or .co.id"
    ),
  
  phone: yup
    .string()
    .required("Phone Number cannot be empty!")
    .min(9, "Phone number is too short"),
  
  message: yup
    .string()
    .required("Message cannot be empty!"),
  
  agreement: yup
    .boolean()
    .oneOf([true], "You must agree to the privacy policy"),
});

export type ContactFormValues = yup.InferType<typeof contactSchema>;

