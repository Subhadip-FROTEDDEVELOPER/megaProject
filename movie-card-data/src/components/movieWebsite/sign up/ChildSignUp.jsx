import React from "react";

const ChildSignUp = () => {
  return (
    <div class="mb-4">
      <label class="block text-gray-700 mb-2" for="username">
        Username
      </label>
      <input
        class="border-2 p-2 rounded w-full"
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        required
      />
    </div>
  );
};

export default ChildSignUp;
