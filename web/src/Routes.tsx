// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import SubDatabasesLayout from 'src/layouts/SubDatabasesLayout'

import PostsLayout from 'src/layouts/PostsLayout'
import MainNavLayout from './layouts/MainNavLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Set wrap={SubDatabasesLayout}>
        <Route path="/sub-databases/new" page={SubDatabaseNewSubDatabasePage} name="newSubDatabase" />
        <Route path="/sub-databases/{id:Int}/edit" page={SubDatabaseEditSubDatabasePage} name="editSubDatabase" />
        <Route path="/sub-databases/{id:Int}" page={SubDatabaseSubDatabasePage} name="subDatabase" />
        <Route path="/sub-databases" page={SubDatabaseSubDatabasesPage} name="subDatabases" />
      </Set>
      <Private unauthenticated='home'>
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>

      <Set wrap={MainNavLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
