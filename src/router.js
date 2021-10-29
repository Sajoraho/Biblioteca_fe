import { createRouter, createWebHistory } from "vue-router"; 
import App from './App.vue'; 
 
import LogIn from './components/LogIn.vue' 
import SignUp from './components/SignUp.vue' 
import Home from './components/Home.vue' 
import Register from './components/Register.vue'
import Book from './components/Book.vue' 
import BookDetails from './components/BookDetails.vue' 
import AddBook from './components/AddBook.vue' 
 
const routes = [{ 
        path: '/', 
        name: 'root', 
        component: App 
    }, 
    { 
        path: '/user/logIn', 
        name: "logIn", 
        component: LogIn 
    }, 
    { 
        path: '/user/signUp', 
        name: "signUp", 
        component: SignUp 
    }, 
    { 
        path: '/user/home', 
        name: "home", 
        component: Home 
    }, 
    { 
        path: '/user/register', 
        name: "register", 
        component: Register 
    }, 
    { 
        path: '/book/list', 
        name: "book", 
        component: Book 
    }, 
    { 
        path: '/book/details/:id', 
        name: "bookDetails", 
        component: BookDetails 
    }, 
    { 
        path: '/addBook', 
        name: "addBook", 
        component: AddBook 
    },

]; 
 
const router = createRouter({ 
  history: createWebHistory(), 
  routes, 
}); 

export default router; 
