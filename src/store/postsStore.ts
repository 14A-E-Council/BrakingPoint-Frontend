import $server from "./axios.instance";
import { defineStore } from "pinia";
import { Notify, Loading } from "quasar";

export interface IPost {
  _id: string;
  author: string;
  content: string;
  title: string;
}

interface IState {
  numberOfPosts: number;
  posts: Array<IPost>;
}

interface IPaginatedParams {
  offset: number;
  limit: string;
  order: string;
  sort: string;
  keyword?: string;
}

interface IIdParams {
  _id: string;
}

export interface IEditParams {
  _id: string;
  content: string;
  title: string;
}

export interface INewPostParams {
  content: string;
  title: string;
import $axios from "./axios.instance";
import { defineStore } from "pinia";
import { Notify, Loading } from "quasar";

Notify.setDefaults({
  position: "bottom",
  textColor: "white",
  timeout: 3000,
  actions: [{ icon: "close", color: "white" }],
  progress: true,
});

interface IPost {
  _id?: string;
  author?: string;
  content?: string;
  title?: string;
}

interface IPagination {
  page: number;
  rowsPerPage: number;
  rowsNumber: number;
  sortBy: string;
  descending: boolean;
}
interface IState {
  posts: Array<IPost>;
  data: IPost; // temporary object for create, edit and delete method
  dataOld: IPost; // temporary object for patch method (store data here before edit)
  isLoading: boolean;
  selected: Array<IPost>;
  pagination: IPagination;
  filter: string;
}

export const usePostsStore = defineStore({
  id: "postsStore",
  state: (): IState => ({
    numberOfPosts: 0,
    posts: [],
  }),
  getters: {
    getPosts(): Array<IPost> {
      return this.posts;
    },
    getNumberOfPosts(): number {
      return this.numberOfPosts;
    },
  },
  actions: {
    async createNewPost(params: INewPostParams): Promise<void> {
      Loading.show();
      $server
        .post("posts", {
          title: params.title,
          content: params.content,
        })
        .then((res) => {
          if (res && res.data) {
            console.log(res.data.post);
            this.numberOfPosts = res.data.count;
          }
          Loading.hide();
        })
        .catch((error) => {
          console.error("hiba: " + error);
          // context.commit("setLoading", false);
          Loading.hide();
          Notify.create({ message: `Error in create post: ${error.message}`, color: "negative" });
        });
    },
    async editPostById(params: IEditParams): Promise<void> {
      Loading.show();
      $server
        .patch(`posts/${params._id}`, {
          title: params.title,
          content: params.content,
        })
        .then((res) => {
          if (res && res.data) {
            console.log(res.data);
          }
          Loading.hide();
        })
        .catch((error) => {
          Loading.hide();
          Notify.create({ message: `Error in edit post: ${error.message}`, color: "negative" });
        });
    },
    async deletePostById(params: IIdParams): Promise<void> {
      Loading.show();
      $server
        .delete(`posts/${params._id}`)
        .then((res) => {
          if (res && res.data) {
            console.log(res.data.status);
            this.posts = this.posts.filter((i) => i._id !== params._id);
            this.numberOfPosts = this.numberOfPosts - 1;
          }
          Loading.hide();
        })
        .catch((error) => {
          Loading.hide();
          Notify.create({ message: `Error in delete post: ${error.message}`, color: "negative" });
        });
    },
    async fetchPosts(): Promise<void> {
      Loading.show();
      $server
        .get("posts")
        .then((res) => {
          if (res && res.data) {
            this.posts = res.data.posts;
            this.numberOfPosts = res.data.count;
          }
          Loading.hide();
        })
        .catch((error) => {
          Loading.hide();
          Notify.create({ message: `Error in fetch posts: ${error.message}`, color: "negative" });
        });
    },
    async fetchPaginatedPosts(params: IPaginatedParams): Promise<void> {
      Loading.show();
      $server
        .get(
          `posts/${params.offset}/${params.limit}/${params.order}/${params.sort}/${params.keyword}`
    posts: [],
    data: {},
    dataOld: {},
    isLoading: false,
    selected: [],
    filter: "",
    pagination: {
      sortBy: "title",
      descending: false,
      page: 0,
      rowsPerPage: 5,
      rowsNumber: 0,
    },
  }),
  getters: {
    // example getter, not in use
    getPosts(): Array<IPost> {
      return this.posts;
    },
  },
  actions: {
    async getPostById(): Promise<void> {
      if (this.data && this.data._id) {
        Loading.show();
        $axios
          .get(`posts/${this.data._id}`)
          .then((res) => {
            Loading.hide();
            if (res && res.data) {
              this.data = res.data;
              Object.assign(this.dataOld, this.data); // for compare after submit
            }
          })
          .catch((error) => {
            Loading.hide();
            Notify.create({
              message: `Error while get post by id: ${error.response.data.message}`,
              color: "negative",
            });
          });
      }
    },
    async createNewPost(): Promise<void> {
      Loading.show();
      this.isLoading = true;
      $axios
        .post("posts", {
          title: this.data.title,
          content: this.data.content,
        })
        .then((res) => {
          if (res && res.data.post._id) {
            Notify.create({
              message: `Post with id=${res.data.post._id} has been created successfully!`,
              color: "positive",
            });
          }
          Loading.hide();
          this.isLoading = false;
        })
        .catch((error) => {
          Loading.hide();
          this.isLoading = false;
          Notify.create({
            message: `Error in create post: ${error.response.data.message}`,
            color: "negative",
          });
        });
    },
    async editPostById(): Promise<void> {
      if (this.data && this.data._id) {
        const diff: any = {}; // only the changed fields are included
        Object.keys(this.data).forEach((k, i) => {
          const newValue = Object.values(this.data)[i];
          const oldValue = Object.values(this.dataOld)[i];
          if (newValue != oldValue) diff[k] = newValue;
        });

        if (Object.keys(diff).length == 0) {
          Notify.create({
            message: "Nothing changed!",
            color: "negative",
          });
          this.isLoading = false;
        } else {
          Loading.show();
          this.isLoading = true;
          $axios
            .patch(`posts/${this.data._id}`, diff)
            .then((res) => {
              Loading.hide();
              if (res && res.data) {
                this.isLoading = false;
                this.selected[0] = res.data;
                Notify.create({
                  message: `Post with id=${res.data._id} has been edited successfully!`,
                  color: "positive",
                });
              }
            })
            .catch((error) => {
              Loading.hide();
              Notify.create({
                message: `Error (${error.response.data.status}) while edit by id: ${error.response.data.message}`,
                color: "negative",
              });
            });
        }
      }
    },
    async deleteById(): Promise<void> {
      Loading.show();
      this.isLoading = true;
      if (this.selected.length) {
        const id_for_delete = this.selected.pop()?._id;
        await $axios
          .delete(`posts/${id_for_delete}`)
          .then(() => {
            Loading.hide();
            Notify.create({
              message: `Document with id=${id_for_delete} has been deleted successfully!`,
              color: "positive",
            });
            if (this.selected.length) this.deleteById(); // recursive call
            else this.isLoading = false;
          })
          .catch((error) => {
            Loading.hide();
            Notify.create({
              message: `Error (${error.response.data.status}) while delete by id: ${error.response.data.message}`,
              color: "negative",
            });
          });
      }
    },
    async fetchPaginatedPosts(): Promise<void> {
      Loading.show();
      $axios
        .get(
          `posts/${(this.pagination.page - 1) * this.pagination.rowsPerPage!}/${this.pagination.rowsPerPage!}/${
            this.pagination.sortBy
          }/${this.pagination!.descending ? -1 : 1}/${this.filter}`
        )
        .then((res) => {
          if (res && res.data) {
            this.posts = res.data.posts;
            this.numberOfPosts = res.data.count;
            this.pagination!.rowsNumber = res.data.count;
          }
          Loading.hide();
        })
        .catch((error) => {
          console.error("hiba: " + error);
          Loading.hide();
          Notify.create({
            message: `Error in paginated fetch posts: ${error.message}`,
          Loading.hide();
          const status = error.response.data.status;
          Notify.create({
            message: `${error.response.data.message} (${status})`,
            color: "negative",
          });
        });
    },
  },
});
