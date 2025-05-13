import React from "react";

export default function A1L1Q01Question() {
  return (
    <div className="container mx-auto p-6 text-gray-900 font-sans leading-relaxed">
      <h1 className="text-2xl font-bold mb-2 text-blue-800">QP Code: A1L1Q01</h1>

      <h2 className="text-xl font-semibold mb-2">Objective:</h2>
      <p className="mb-4">
        Design and build a visually compelling <strong>Student Spotlight Card</strong> using <strong>HTML</strong> and <strong>CSS</strong> (JavaScript optional). This component must celebrate a student’s achievement with aesthetic quality, responsiveness, and semantic correctness. Your solution will be auto-evaluated against specific CSS properties, structure, and rendering performance.
      </p>

      <div>
        <img src="/a1l1q1_img.png" alt="Product Grid Page Example" className="w-full mb-4" />
      </div>

      <h2 className="text-xl font-semibold mb-2">Expected Output:</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>A circular profile image (100x100px)</li>
        <li>A title (e.g., “Congratulations!”)</li>
        <li>The student’s name as a styled hyperlink</li>
        <li>The student’s institution name</li>
        <li>An optional domain badge/logo</li>
        <li>Centered card layout over a full-screen background</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Layout and Style Requirements:</h3>
      <table className="w-full text-sm border border-gray-300 mb-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Area</th>
            <th className="border p-2">Selector</th>
            <th className="border p-2">CSS Property</th>
            <th className="border p-2">Expected Value</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Card Background", ".backgroundpart", "padding", "20px"],
            ["Card Layout", ".backgroundpart", "display", "flex"],
            ["Card Alignment (Horizontal)", ".backgroundpart", "justify-content", "center"],
            ["Card Alignment (Vertical)", ".backgroundpart", "align-items", "center"],
            ["Card Rounded Corners", ".contentcard", "border-radius", "15px"],
            ["Card Padding", ".contentcard", "padding", "30px 20px"],
            ["Card Max Width", ".contentcard", "max-width", "400px"],
            ["Card Text Alignment", ".contentcard", "text-align", "center"],
            ["Card Background Color", ".contentcard", "background-color", "#e6f9fc"],
            ["Profile Picture Width", ".profile-pic", "width", "100px"],
            ["Profile Picture Height", ".profile-pic", "height", "100px"],
            ["Profile Picture Style", ".profile-pic", "border-radius", "50%"],
            ["Domain Badge Size", ".gift-img", "width", "80px"],
            ["Page Background Image", ".backgroundpart", "background-size", "cover"],
          ].map(([area, selector, property, value], idx) => (
            <tr key={idx}>
              <td className="border p-2">{area}</td>
              <td className="border p-2">{selector}</td>
              <td className="border p-2">{property}</td>
              <td className="border p-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">React Component Rendering:</h3>
      <p className="mb-4">
        Create a <code>label</code> tag at the top right corner of the screen which display the current date and time in the format <code>DAY DATE MONTH YEAR, HH:MM:SS</code>. 
        You can write your code in <code>App.jsx</code> or <code>App.vue</code> file. The label should be updated every second.
      </p>

      <h3 className="text-lg font-semibold mb-2">Responsiveness Criteria:</h3>
      <p className="mb-4">
        Your layout will be tested across the following viewport sizes: <br />
        <code>1920×1080</code>, <code>1366×768</code>, <code>768×1024</code>, <code>425×800</code>, and <code>375×667</code>.
        Ensure that the card remains centered and visually intact on all viewports.
      </p>

      

      <h3 className="text-lg font-semibold mb-2">Performance Expectation:</h3>
      <p>
        Your page should load <strong>quickly</strong> (preferably under <code>1500ms</code>) even when accessed by 2 concurrent users. Profile images and icons should be optimized to avoid layout jank.
      </p>
    </div>
  );
}
