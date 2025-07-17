import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.includes("@")) newErrors.email = "Valid email is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", { name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <main className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-4 w-full max-w-md p-6 rounded-md shadow-md ${
          theme === "light" ? "bg-white" : "bg-gray-700"
        }`}
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className={`font-semibold mb-1 ${
              theme === "light" ? "text-gray-700" : "text-gray-200"
            }`}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            ref={nameRef}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Good Name"
            required
            className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === "light" ? "" : "bg-gray-600 border-gray-500 text-white"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className={`font-semibold mb-1 ${
              theme === "light" ? "text-gray-700" : "text-gray-200"
            }`}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
            className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === "light" ? "" : "bg-gray-600 border-gray-500 text-white"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}

export default Content;
