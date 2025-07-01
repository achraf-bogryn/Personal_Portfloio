// project images
import Project1 from '../assets/project-1.png';
import Project3 from '../assets/project-2.png';
import Project2 from '../assets/project-3.png';
import Project4 from '../assets/Churn .PNG';
import Project5 from '../assets/sentiment.PNG';
import Project6 from '../assets/next.PNG';

// skills images
import Html from '../assets/html5.svg';
import Css from '../assets/css.svg';
import Js from '../assets/javascript.svg';
import React from '../assets/react.svg';
import Node from '../assets/nodejs.svg';
import TypeScript from '../assets/typescript.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Postgres from '../assets/postgresql.svg';
import python from '../assets/python.svg';
import pandas from '../assets/pandas.svg';
import numpy from '../assets/numpy.svg';
import scikit from '../assets/scikitlearn.svg';
import tensorflow from '../assets/tensorflow.svg';
import pytorch from '../assets/pytorch.svg';
import flask from '../assets/flask.svg';
import spring from '../assets/spring.svg';
import next from '../assets/next.svg';
import spark from '../assets/spark.svg';
import hadoop from '../assets/hadoop.svg';
import airflow from '../assets/airflow.svg';
import kafka from '../assets/kafka.svg';
import sql from '../assets/sql.svg';
import mongodb from '../assets/mongodb.svg';
import docker from '../assets/docker.svg';
import git from '../assets/git.svg';
import aws from '../assets/aws.svg';
import gcp from '../assets/gcp.svg';
import java from '../assets/java.svg';
import bi from '../assets/bi.svg';


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

  // {
  //   id: 4,
  //   title: 'Algerian Forest Fires Regression',
  //   description:
  //     'Built a regression model using various ML techniques to predict forest fires in Algeria based on meteorological and environmental data.',
  //   image: Project3,
  //   stack: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Regression'],
  //   liveUrl: '',
  //   sourceUrl: 'https://github.com/achraf-bogryn/algerian-forest-fires-regression/tree/main',
  // },
];


export const skills = [
  // 🟦 Programming Languages
  { id: 2, name: 'Python', icon: python },
  { id: 1, name: 'Java', icon: java },
  { id: 3, name: 'JavaScript', icon: Js },

    // 🔥 Big Data & Pipelines
  { id: 18, name: 'Spark', icon: spark },
  { id: 19, name: 'Hadoop', icon: hadoop },
  { id: 20, name: 'Airflow', icon: airflow },
  { id: 21, name: 'Kafka', icon: kafka },


    // 🧠 Data Science Libraries
  { id: 9, name: 'Powe BI', icon: bi },
  { id: 10, name: 'Pandas', icon: pandas },
  { id: 11, name: 'NumPy', icon: numpy },
  { id: 12, name: 'Scikit-learn', icon: scikit },
  { id: 13, name: 'TensorFlow', icon: tensorflow },
  { id: 14, name: 'PyTorch', icon: pytorch },

  // 🟩 Frontend & Frameworks
  { id: 4, name: 'React', icon: React },
  { id: 17, name: 'Next.js', icon: next },



  // ⚙️ Backend & APIs
  { id: 15, name: 'Flask', icon: flask },
  { id: 16, name: 'Spring', icon: spring },



  // 🗄️ Databases
  { id: 22, name: 'SQL', icon: sql },
  { id: 23, name: 'MongoDB', icon: mongodb },

  // 🚀 Cloud & DevOps
  { id: 24, name: 'Docker', icon: docker },
  { id: 26, name: 'AWS', icon: aws },
  { id: 27, name: 'GCP', icon: gcp },

  // 🔧 Version Control
  { id: 25, name: 'Git', icon: git },
];

