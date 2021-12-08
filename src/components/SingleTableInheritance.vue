<template>
  <div class="SingleTable">
    <h2>AG-Grid Vue</h2>
    <AgGridVue
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      colResizeDefault="shift"
      :pagination="true"
      :paginationAutoPageSize="true"
    />
    <h2>Single table inheritance</h2>
    <div class="users" v-for="user in users" :key="user.id">
      <h4>
        {{ user.first_name }}
      </h4>
    </div>
    <h2>Publishers</h2>
    <div class="users" v-for="publisher in publishers" :key="publisher.id">
      <h4>{{ publisher.first_name }}</h4>
    </div>
    <h2>Admins</h2>
    <div class="users" v-for="admin in admins" :key="admin.id">
      <h4>{{ admin.first_name }}</h4>
    </div>
    <h2>Super Admins</h2>
    <div
      class="users"
      v-for="super_admin in super_admins"
      :key="super_admin.id"
    >
      <h4>{{ super_admin.first_name }}</h4>
    </div>
  </div>
</template>

<script>
//import Publisher from "../classes/Publisher";
import { AgGridVue } from "ag-grid-vue";
import { Admin, Publisher, SuperAdmin, User } from "../classes/UserHierarchy";
export default {
  name: "SingleTable",
  components: {
    AgGridVue,
  },
  data() {
    return {
      columnDefs: [],
      rowData: [],
      defaultColDef: {
        flex: 1,
        minWidth: 110,
        editable: true,
        resizable: true,
      },
    };
  },
  beforeMount() {},
  created() {
    User.insertOrUpdate({
      data: [
        {
          type: "PUBLISHER",
          id: 5,
          first_name: "Andarus",
        },
        {
          type: "ADMIN",
          id: 66,
          first_name: "Valerius",
        },
        {
          type: "SUPER_ADMIN",
          id: 67,
          first_name: "Herius",
        },
      ],
    });
  },

  mounted() {
    User.find(67).deleteServer();
    for (var i = 0; i < Object.keys(this.users[0]).length; i++) {
      this.columnDefs.push({
        headerName: Object.keys(this.users[0])[i].toUpperCase(),
        field: Object.keys(this.users[0])[i],
      });
    }
    this.columnDefs = this.columnDefs.filter(
      (column) => column.headerName !== "$ID"
    );
    console.log(this.columnDefs);
    this.rowData = this.users;
  },
  computed: {
    users() {
      return User.all();
    },
    publishers() {
      return Publisher.all();
    },
    admins() {
      return Admin.all();
    },
    super_admins() {
      return SuperAdmin.all();
    },
  },
};
</script>

<style scoped>
@import "~ag-grid-community/dist/styles/ag-grid.css";
@import "~ag-grid-community/dist/styles/ag-theme-alpine.css";
.SingleTable {
  padding: 10px;
  background: rosybrown;
  color: white;
}
h2 {
  font-style: 44px;
}
.ag-theme-alpine .ag-header {
  background: rgb(104, 104, 116);
  color: white !important;
}
</style>
