import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  user: null,
  message: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET EVENTS
    getSignupSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    getSigninSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
  
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  openModal,
  closeModal,
  selectEvent,
  emptyMessage,
  emptyError,
  getSigninSuccess,
} = slice.actions;

// ----------------------------------------------------------------------

export function signUp(user) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      console.log('user: ' , user);
      const response = await axios.post(
        'http://localhost:4001/admin/signup',
        user
      );

      console.log(response.data)
      return response?.data;
    } catch (error) {
      console.log(error);
      return error.message
    }
  };
}

export function signIn(user) {
  return async () => {
    dispatch(slice.actions.startLoading());

    try {
      console.log('user: ' , user);
      const response = await axios.post(
        'http://localhost:4001/admin/signin',
        user
      );
      console.log('logged in user',response?.data);
      dispatch(slice.actions.getSigninSuccess(response.data));

      localStorage.setItem('user', JSON.stringify(response.data));
      return response?.data
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
      return error

    }
  };
}

// export function forgotPassword(email, newPassword) {
//   return async () => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.post(
//         'http://3.142.227.93:4000/auth/updatePassword',
//         { email: email.toLowerCase(), newPassword: newPassword }
//       );
//       // console.log(response);
//       dispatch(slice.actions.passwordUpdate(response.data));
//     } catch (error) {
//       console.log(error);
//       dispatch(slice.actions.hasError(error.message));
//     }
//   };
// }

// export function updateUser(userId, userData  ) {
//   return async () => {
//     console.log('userData', userData);
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.patch(
//         'http://3.142.227.93:4000/auth/updateUserData',
//         { userId, userData} , 
//       );
//       // console.log(response);
//       dispatch(slice.actions.userUpdate(response.data));
//       localStorage.setItem('user', JSON.stringify(response.data.userExist));
//       return response?.data;
//     } catch (error) {
//       console.log(error);
//       dispatch(slice.actions.hasError(error.message));
//     }
//   };
// }

export function logout() {
  return async () => {
    dispatch(slice.actions.hasError(null));
    dispatch(slice.actions.getSigninSuccess(null));
    localStorage.clear();
  };
}
// ----------------------------------------------------------------------

// export function createEvent(newEvent) {
//   return async () => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.post('/api/calendar/events/new', newEvent);
//       dispatch(slice.actions.createEventSuccess(response.data.event));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function updateEvent(eventId, updateEvent) {
//   return async () => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.post('/api/calendar/events/update', {
//         eventId,
//         updateEvent,
//       });
//       dispatch(slice.actions.updateEventSuccess(response.data.event));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function deleteEvent(eventId) {
//   return async () => {
//     dispatch(slice.actions.startLoading());
//     try {
//       await axios.post('/api/calendar/events/delete', { eventId });
//       dispatch(slice.actions.deleteEventSuccess({ eventId }));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function selectRange(start, end) {
//   return async () => {
//     dispatch(
//       slice.actions.selectRange({
//         start: start.getTime(),
//         end: end.getTime(),
//       })
//     );
//   };
// }
