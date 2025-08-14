"use client";
import React from "react";
import { usePathname } from "next/navigation";


export default function NewsList({newsData}) {
    const pathname = usePathname();
  return (
      <div className="list_mutinews">
        <ul>
          {newsData.map((item, index) => (
              <li key={index}>
                <a href={pathname + "/" + item.slug} title={item.title}>
                  <img src={item.image} alt={item.title} title={item.title} />
                </a>
                <a href={pathname + "/" + item.slug} title={item.title}>
                  <h3>{item.title}</h3>
                </a>
                <span>({item.date})</span>
                <p>{item.description}</p>
              </li>
          ))}
        </ul>
      </div>
  );
}
