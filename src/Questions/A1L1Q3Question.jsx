import React from "react";

export default function A1L1Q03Question() {
  return (
    <div className="container mx-auto p-6 text-gray-900 font-sans leading-relaxed">
      <h1 className="text-2xl font-bold mb-2 text-blue-800">QP Code: A1L1Q03</h1>

      <h2 className="text-xl font-semibold mb-2">Objective:</h2>
      <p className="mb-4">
        Build a simple responsive <strong>Product Grid Page</strong> using HTML and CSS.
        Your page should present product cards in a 3-column grid layout,
        with consistent spacing, hover effects, and semantic HTML structure.
      </p>

      <div>
        <img src="/a1l1q3_img.png" alt="Product Grid Page Example" className="w-full mb-4" />
      </div>

      <h2 className="text-xl font-semibold mb-2">Expected Output:</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>A 3-column grid of product cards</li>
        <li>Each card contains an image and a title (optional description/price)</li>
        <li>Fully responsive layout</li>
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
            ["Grid Layout", ".product-grid", "display", "grid"],
            ["Grid Column Count", ".product-grid", "grid-template-columns", "repeat(3, 1fr)"],
            ["Grid Gap", ".product-grid", "gap", "20px"],
            ["Card Padding", ".product-card", "padding", "15px"],
            ["Card Border", ".product-card", "border", "1px solid grey"],
            ["Image Height", ".product-image", "height", "100px"],
            ["Image Width", ".product-image", "width", "100px"],
            ["Container Padding", ".product-container", "padding", "30px 20px"],
            ["Title Alignment", ".product-title", "text-align", "center"],
            ["Card Hover Transform", ".product-card", "transform", "translateY(-5px)"],
            ["Component - Label Position", ".productcountpart", "justify-content", "end"]
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
      Create a <code>label</code> in the top right corner of the screen to display the number of products/new arrivals in the grid. The label should update dynamically updated from the api call. 
      You can write your code in <code>App.jsx</code> or <code>App.vue</code> file. 
      Also the necessary CSS styles are already provided.
      </p>

      <h3 className="text-lg font-semibold mb-2">Responsiveness Criteria:</h3>
      <p className="mb-4">
        Grid layout should adapt to screen sizes like: <br />
        <code>1920×1080</code>, <code>1366×768</code>, <code>768×1024</code>, <code>425×800</code>, <code>375×667</code>
      </p>

     
      <h3 className="text-lg font-semibold mb-2">Performance Expectation:</h3>
      <p>
        Page must load in under <code>1500ms</code> with 2 concurrent users.
        Ensure minimal layout shift and optimized image rendering.
      </p>
    </div>
  );
}
