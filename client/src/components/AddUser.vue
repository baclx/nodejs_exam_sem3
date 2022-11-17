<template>
  <nav>
    <a href="/">Home |</a>
    <a href="/add"> Add new User |</a>
    <a href="/all"> All User List</a>
  </nav>
  <div class="m-5">
    <h1 class="mb-5">Add New User</h1>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">First Name</label>
      <div class="col-sm-10">
        <input
          v-model="user.firstName"
          type="text"
          class="form-control"
          placeholder="First Name"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Last Name</label>
      <div class="col-sm-10">
        <input
          v-model="user.lastName"
          type="text"
          class="form-control"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Phone Number</label>
      <div class="col-sm-10">
        <input
          v-model="user.phoneNumber"
          type="text"
          class="form-control"
          placeholder="Phone Number"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">User Name</label>
      <div class="col-sm-10">
        <input
          v-model="user.userName"
          type="text"
          class="form-control"
          placeholder="User Name"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input v-model="user.password" type="password" class="form-control" />
      </div>
    </div>
    <button
      type="button"
      @click="saveTutorial"
      class="text-center btn btn-info"
    >
      Create
    </button>
  </div>
</template>

<script>
import TutorialDataService from "@/services/TutorialDataService";

export default {
  data() {
    return {
      user: {
        id: null,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    saveTutorial() {
      let data = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        phoneNumber: this.user.phoneNumber,
        userName: this.user.userName,
        password: this.user.password,
      };

      TutorialDataService.create(data)
        .then((res) => {
          this.user.id = res.data.id;
          console.log(res, data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>