<template>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TabContent',
    props: {
      title: String,
      content: String,
    },
  };
  </script>