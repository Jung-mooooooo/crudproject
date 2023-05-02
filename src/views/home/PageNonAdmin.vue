<template>
  <div class="container">
    <h1>Admin</h1>
    <br />
    <div class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">ID</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <br /><br />
    <button type="submit" onclick="location.href='/admin'">Sign in</button>
  </div>
  <br /><br /><br />
</template>
<script>
export default {
  default: "NonAdmin",
  components: {},
  data() {
    return {
      isChange: false,
    };
  },
  methods: {
    changeLabel() {
      if (document.getElementById("id").value !== null) {
        this.isChange = true;
      } else {
        this.isChange = false;
      }
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  top: 50px;
  width: 500px;
  height: 500px;
  margin: auto;
}

h1 {
  color: navy;
  position: relative;
  width: 150px;
  height: 80px;
  line-height: 80px;
  border-bottom: 5px solid navy;
}

form {
  width: 400px;
  height: 400px;
  margin: auto;
}

input {
  width: 400px;
  border: none;
  border-radius: 0;
  border-bottom: 5px solid navy;
  color: navy;
}

label {
  color: navy;
}

button {
  width: 300px;
  height: 60px;
  background: #ffd601;
  color: white;
  border: 1px solid #ffd601;
  position: relative;
  left: -30px;
  border-radius: 10px;
  font-size: 30px;
}
</style>
