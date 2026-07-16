export async function submitStudentForm(payload) {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  if (payload.email.toLowerCase().includes("fail")) {
    throw new Error("Mock submission failed. Please try again.");
  }

  console.log("Student form payload:", payload);

  return {
    success: true,
    message: "Form submitted successfully.",
  };
}
