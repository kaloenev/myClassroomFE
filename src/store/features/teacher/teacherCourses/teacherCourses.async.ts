import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../../axios';
import { getResponseMessage } from '../../../../helpers/response.util';
import CreateToastMessage from '../../../../utils/toast.util';

export const getUpcomingCourses = createAsyncThunk('teacher/getUpcomingCourses', async (_, { rejectWithValue }) => {
  try {
    const res: any = await axiosInstance.get(`lessons/getTeacherUpcoming`);

    return res?.data;
  } catch (err) {
    CreateToastMessage('error', getResponseMessage(err));

    return rejectWithValue(getResponseMessage(err));
  }
});

export const getCoursesAll = createAsyncThunk('teacher/getCoursesTypesAll ', async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.get(`/lessons/getTeacherCourses/All`);

    return res.data;
  } catch (err) {
    CreateToastMessage('error', getResponseMessage(err));

    return rejectWithValue(getResponseMessage(err));
  }
});

export const getCoursesActive = createAsyncThunk('teacher/getCoursesTypesActive ', async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.get(`/lessons/getTeacherCourses/Active`);

    return res.data;
  } catch (err) {
    CreateToastMessage('error', getResponseMessage(err));

    return rejectWithValue(getResponseMessage(err));
  }
});

export const getCoursesInactive = createAsyncThunk(
  'teacher/getCoursesTypesInactive ',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/lessons/getTeacherCourses/Inactive`);

      return res.data;
    } catch (err) {
      CreateToastMessage('error', getResponseMessage(err));

      return rejectWithValue(getResponseMessage(err));
    }
  },
);

export const getCoursesDraft = createAsyncThunk('teacher/getCoursesTypesDraft ', async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.get(`/lessons/getTeacherCourses/Draft`);

    return res.data;
  } catch (err) {
    CreateToastMessage('error', getResponseMessage(err));

    return rejectWithValue(getResponseMessage(err));
  }
});

export const getPayments = createAsyncThunk('teacher/getPayments ', async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.get(`/lessons/getPayments`);

    return res.data;
  } catch (err) {
    CreateToastMessage('error', getResponseMessage(err));

    return rejectWithValue(getResponseMessage(err));
  }
});
