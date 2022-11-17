<template>
  <nav>
    <a href="/">Home |</a>
    <a href="/add"> Add new User |</a>
    <a href="/all"> All User List</a>
  </nav>
  <h1 class="m-5">User List</h1>
  <table class="table m-5">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Phone Number</th>
        <th scope="col">User Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tutorial, index) in tutorials" :key="index">
        <td>{{ ++index }}</td>
        <td>{{ tutorial.firstName }}</td>
        <td>{{ tutorial.lastName }}</td>
        <td>{{ tutorial.phoneNumber }}</td>
        <td>{{ tutorial.username }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import TutorialDataService from "@/services/TutorialDataService";

export default {
  data() {
    return {
      tutorials: [],
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((res) => {
          this.tutorials = res.data;
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>