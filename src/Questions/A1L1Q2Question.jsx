
import React from "react";

export default function A1L1Q02Question() {
  return (
    <div className="container mx-auto p-6 text-gray-900 font-sans leading-relaxed">
      <h1 className="text-2xl font-bold mb-2 text-blue-800">QP Code: A1L1Q02</h1>

      <h2 className="text-xl font-semibold mb-2">Objective:</h2>
      <p className="mb-4">
        Build a simple responsive <strong>Technology Grid Showcase Page</strong> using HTML and CSS.
        Your layout should visually display technology cards in a clean, responsive grid with icons and titles,
        and meet defined visual and semantic requirements.
      </p>

      <div>
        <img src="/a1l1q2_img.png" alt="Product Grid Page Example" className="w-full mb-4" />
      </div>

      <h2 className="text-xl font-semibold mb-2">Expected Output:</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Grid layout of technology cards</li>
        <li>Each card with an image/icon and title</li>
        <li>Fully responsive grid layout that adapts to screen sizes</li>
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

          <tr>
            <td className="border p-2">container - background color</td>
            <td className="border p-2">.technologies-container</td>
            <td className="border p-2">background-color</td>
            <td className="border p-2">#f3fbff</td>
          </tr>
          <tr>
            <td className="border p-2">container : padding</td>
            <td className="border p-2">.technologies-container</td>
            <td className="border p-2">padding</td>
            <td className="border p-2">40px 20px</td>
          </tr>
          <tr>
            <td className="border p-2">sub-text width</td>
            <td className="border p-2">.tech-subtext</td>
            <td className="border p-2">max-width</td>
            <td className="border p-2">700px</td>
          </tr>
          <tr>
            <td className="border p-2">sub-text margin</td>
            <td className="border p-2">.tech-subtext</td>
            <td className="border p-2">margin</td>
            <td className="border p-2">0 auto 40px</td>
          </tr>
          <tr>
            <td className="border p-2">sub-text padding</td>
            <td className="border p-2">.tech-card</td>
            <td className="border p-2">padding</td>
            <td className="border p-2">20px</td>
          </tr>
          <tr>
            <td className="border p-2">sub-text position</td>
            <td className="border p-2">.tech-card</td>
            <td className="border p-2">position</td>
            <td className="border p-2">relative</td>
          </tr>
          <tr>
            <td className="border p-2">Image width</td>
            <td className="border p-2">.tech-img</td>
            <td className="border p-2">width</td>
            <td className="border p-2">60px</td>
          </tr>
          <tr>
            <td className="border p-2">Image Height</td>
            <td className="border p-2">.tech-img</td>
            <td className="border p-2">height</td>
            <td className="border p-2">60px</td>
          </tr>
          <tr>
            <td className="border p-2">Image Display</td>
            <td className="border p-2">.tech-img</td>
            <td className="border p-2">display</td>
            <td className="border p-2">block</td>
          </tr>
          <tr>
            <td className="border p-2">Image Margin</td>
            <td className="border p-2">.tech-img</td>
            <td className="border p-2">margin</td>
            <td className="border p-2">0 auto</td>
          </tr>
          <tr>
            <td className="border p-2">Page Layout with Grid</td>
            <td className="border p-2">.tech-grid</td>
            <td className="border p-2">display</td>
            <td className="border p-2">grid</td>
          </tr>
          <tr>
            <td className="border p-2">CSS Style - Smoothness & Performance</td>
            <td className="border p-2">.tech-grid</td>
            <td className="border p-2">gap</td>
            <td className="border p-2">70px</td>
          </tr>
          <tr>
            <td className="border p-2">Aesthetics Elements</td>
            <td className="border p-2">.tech-grid</td>
            <td className="border p-2">justify-content</td>
            <td className="border p-2">center</td>
          </tr>
          <tr>
            <td className="border p-2">CSS - Structure of a Page - Border Radius</td>
            <td className="border p-2">.tech-card</td>
            <td className="border p-2">border-radius</td>
            <td className="border p-2">12px</td>
          </tr>
        </tbody>
      </table>


      <h3 className="text-lg font-semibold mb-2">React Component Rendering:</h3>
      <p className="mb-4">
        Create a <code>label</code> tag at the bottom of the screen which contains <code>Designed and Developed by YOUR_NAME</code> text.
        You can write your code in <code>App.jsx</code> or <code>App.vue</code> file.
      </p>

      <h3 className="text-lg font-semibold mb-2">Responsiveness Criteria:</h3>
      <p className="mb-4">
        Ensure the grid collapses and adjusts on various screen widths:
        <code> 1920×1080, 1366×768, 768×1024, 425×800, 375×667 </code>
      </p>


      <h3 className="text-lg font-semibold mb-2">Performance Expectation:</h3>
      <p>
        Ensure fast page loading under 1500ms when accessed by 2 concurrent users. Icons and images must be optimized.
      </p>
    </div>
  );
}
