// project images
import Project1 from '../assets/project-1.png';
import Project3 from '../assets/project-2.png';
import Project2 from '../assets/project-3.png';

// skills images
import Html from '../assets/html5.svg';
import Css from '../assets/css.svg';
import Js from '../assets/javascript.svg';
import React from '../assets/react.svg';
import Node from '../assets/nodejs.svg';
import TypeScript from '../assets/typescript.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Postgres from '../assets/postgresql.svg';

// export const projects = [
//   {
//     id: 1,
//     title: 'Zen',
//     description:
//       'Zen is a modern hotel website built with Next.js, featuring a sleek design powered by Tailwind CSS. It offers an intuitive user interface to explore rooms, amenities, and make reservations seamlessly.',
//     image: Project1,
//     stack: ['React', 'Next.js', 'Tailwind CSS'],
//     liveUrl: 'https://www.google.com',
//     sourceUrl: 'https://www.google.com',
//   },

//   {
//     id: 2,
//     title: 'Pixar',
//     description:
//       'Pixar is a website clone built with React, featuring a responsive design, carousels, and a navigation system. The website is a perfect example of how to create a modern website with a clean and minimalistic design.',

//     image: Project2,
//     stack: ['React', 'Tailwind CSS', 'JavaScript'],
//     liveUrl: 'https://www.google.com',
//     sourceUrl: 'https://www.google.com',
//   },

//   {
//     id: 3,
//     title: 'Furniq',
//     description:
//       'This project is a modern furniture e-commerce website with a clean and minimalistic design. The website is built with React and features a responsive design, a functional shopping cart, and a user-friendly navigation system.',
//     image: Project3,
//     stack: ['React', 'Tailwind CSS', 'JavaScript'],
//     liveUrl: 'https://www.google.com',
//     sourceUrl: 'https://www.google.com',
//   },
// ];

export const projects = [
  {
    id: 1,
    title: 'Customer Churn Prediction',
    description:
      'Customer churn prediction based on tabular banking data using an Artificial Neural Network (ANN) model. Includes preprocessing and binary classification.',
    image: Project1,
    stack: ['TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'Scikit-learn'],
    liveUrl: '',
    sourceUrl: 'https://github.com/achraf-bogryn/ANN-Classification-Probelm/tree/main',
  },

  {
    id: 2,
    title: 'IMDB Sentiment Classification',
    description:
      'Binary sentiment classification of movie reviews using an RNN architecture trained on the IMDB dataset. This project focuses on NLP and sequence modeling.',
    image: Project2,
    stack: ['Keras', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'NLP', 'Recurrent Neural Network'],
    liveUrl: '',
    sourceUrl: 'https://github.com/achraf-bogryn/RNN-Imdb-Sentiment/tree/main',
  },

  {
    id: 3,
    title: 'Next Word Prediction (LSTM)',
    description:
      "Generated next-word predictions from Shakespeare’s Hamlet using an LSTM-based language model. Demonstrates sequence modeling for text generation.",
    image: Project3,
    stack: ['TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'LSTM', 'Text Generation', 'NLP'],
    liveUrl: '',
    sourceUrl: 'https://github.com/achraf-bogryn/LSTM-NextWordGen/tree/main',
  },

  {
    id: 4,
    title: 'Algerian Forest Fires Regression',
    description:
      'Built a regression model using various ML techniques to predict forest fires in Algeria based on meteorological and environmental data.',
    image: Project3,
    stack: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Regression'],
    liveUrl: '',
    sourceUrl: 'https://github.com/achraf-bogryn/algerian-forest-fires-regression/tree/main',
  },
];


export const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: Html,
  },

  {
    id: 2,
    name: 'CSS',
    icon: Css,
  },

  {
    id: 3,
    name: 'JavaScript',
    icon: Js,
  },

  {
    id: 4,
    name: 'React',
    icon: React,
  },

  {
    id: 5,
    name: 'Node',
    icon: Node,
  },

  {
    id: 6,
    name: 'TypeScript',
    icon: TypeScript,
  },

  {
    id: 7,
    name: 'Tailwind',
    icon: Tailwind,
  },

  {
    id: 8,
    name: 'Postgres',
    icon: Postgres,
  },
];
