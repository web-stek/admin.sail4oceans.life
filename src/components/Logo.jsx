import React from "react";

const Logo = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 828 563"
      aria-label="nextcase Logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fill: color ? color : "white",
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <g transform="matrix(6.05238e-17,-0.982519,1.03286,6.35886e-17,422.571,424.003)">
        <path
          d="M234.603,17.863C123.838,17.863 37.662,100.879 37.662,203.459C37.662,302.615 38.121,369.197 38.121,369.197C38.121,383.208 52.717,392.552 68.041,392.552C83.345,392.552 97.96,383.283 97.96,369.32L97.944,204.689C97.944,140.321 158.532,82.722 234.603,82.722C310.675,82.722 371.265,140.321 371.265,204.689C371.265,272.687 371.246,369.319 371.246,369.319C371.246,383.29 385.853,392.552 401.169,392.552C416.269,392.552 430.634,383.688 431.086,369.574C431.092,368.718 431.547,302.839 431.547,203.459C431.547,100.879 345.369,17.863 234.603,17.863Z"
          style={{
            fill: color ? color : "rgb(44,51,51)",
            fillRule: "nonzero",
          }}
        />
      </g>
      <g transform="matrix(0.982519,3.61855e-19,-3.44219e-19,1.03286,-37.0249,-18.4504)">
        <path
          d="M234.603,17.863C123.838,17.863 37.662,100.879 37.662,203.459C37.662,302.615 38.121,369.197 38.121,369.197C38.121,383.208 52.717,392.552 68.041,392.552C83.345,392.552 97.96,383.283 97.96,369.32L97.944,204.689C97.944,140.321 158.532,82.722 234.603,82.722C310.675,82.722 371.265,140.321 371.265,204.689C371.265,272.687 371.246,369.319 371.246,369.319C371.246,383.29 385.853,392.552 401.169,392.552C416.269,392.552 430.634,383.688 431.086,369.574C431.092,368.718 431.547,302.839 431.547,203.459C431.547,100.879 345.369,17.863 234.603,17.863Z"
          style={{
            fill: color ? color : "rgb(44,51,51)",
            fillRule: "nonzero",
          }}
        />
      </g>
    </svg>
  );
};

export default Logo;
