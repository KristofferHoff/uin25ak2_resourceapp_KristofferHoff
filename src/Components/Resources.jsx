import React from "react";
import { resources } from "./ressurser.js"; 

export default function ResourcesList({ category= "html" }) {
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <div>
      <h1>Ressursene for {category}</h1>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link}>
              {resource.title}
              {resource.category}
            </a>
          </li>
          //SETT INN SÅ LINKER UNDER HTML OSV SÅ JRG FÅR LINKER PÅ TINGENE
        ))}
      </ul>
    </div>
  );
}
