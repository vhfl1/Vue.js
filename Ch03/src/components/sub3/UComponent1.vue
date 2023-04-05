<template></template>
<h4>UComponent1</h4>
<p>
Name: {{name}}
Age: {{age}}
</p>
<script>
export default {
  name: "UComponent1",
  //상위 컴포넌트에서 전달하는 상태값을 수신하는 API
  props: ["name", "age"],
};
</script>

<style scoped></style>
