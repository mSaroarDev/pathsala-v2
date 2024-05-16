import { Toaster } from "react-hot-toast";
import Homepage from "./pages/Homepage";
import { showSuccess } from "./utils/toastMessages";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import ClientDashboard from "./pages/client/Dashboard";
import AllNotices from "./pages/client/notice/AllNotices";
import NewNotice from "./pages/client/notice/NewNotice";
import AllClass from "./pages/client/classes/AllClass";
import CreateClass from "./pages/client/classes/CreateClass";
import AllStudents from "./pages/client/students/AllStudents";
import AllTeachers from "./pages/client/teachers/AllTeachers";
import CreateTeacher from "./pages/client/teachers/CreateTeacher";
import AllStaffs from "./pages/client/staffs/AllStaffs";
import CreateStaff from "./pages/client/staffs/CreateStaff";
import EditStaff from "./pages/client/staffs/EditStaff";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Inbox from "./pages/client/inbox/AllNotices";
import AllCommittee from "./pages/client/committee/AllCommittee";
import CreateCommittee from "./pages/client/committee/CreateCommitee";
import EditCommittee from "./pages/client/committee/EditCommittee";
import AdmissionPage from "./pages/client/admission/AdmissionPage";
import AccountingDashboard from "./pages/client/accounting/Dashboard";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/client/inbox" element={<Inbox />} />
        <Route path="/client/notices" element={<AllNotices />} />
        <Route path="/client/notices/create" element={<NewNotice />} />
        <Route path="/client/notices/edit" element={<NewNotice />} />
        <Route path="/client/events" element={<AllNotices />} />
        <Route path="/client/events/create" element={<NewNotice />} />
        <Route path="/client/events/edit" element={<NewNotice />} />
        <Route path="/client/classes" element={<AllClass />} />
        <Route path="/client/classes/create" element={<CreateClass />} />
        <Route path="/client/students" element={<AllStudents />} />
        <Route path="/client/teachers" element={<AllTeachers />} />
        <Route path="/client/teachers/create" element={<CreateTeacher />} />
        <Route path="/client/teachers/edit" element={<CreateTeacher />} />
        <Route path="/client/staffs" element={<AllStaffs />} />
        <Route path="/client/staffs/create" element={<CreateStaff />} />
        <Route path="/client/staffs/edit" element={<EditStaff />} />
        <Route path="/client/committee" element={<AllCommittee />} />
        <Route path="/client/committee/create" element={<CreateCommittee />} />
        <Route path="/client/committee/edit" element={<EditCommittee />} />
        <Route path="/client/admission" element={<AdmissionPage />} />
        <Route
          path="/client/accounting/dashboard"
          element={<AccountingDashboard />}
        />
      </Routes>
    </>
  );
}

export default App;
