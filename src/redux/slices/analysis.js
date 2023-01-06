import { createSlice } from '@reduxjs/toolkit';
// utils
import { dispatch } from '../store';
import axios from '../../utils/axios';
//

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  allContests: [],
  contestImages :[],
  annotatedImages:[]
};

const slice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    stopLoading(state) {
      state.isLoading = false;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET EVENTS
    setAllContests(state, action) {
      state.isLoading = false;
      state.error = null;
      state.allContests = action.payload;
    },
    setContestImages(state , action) {
      state.isLoading = false;
      state.error = null;
      state.contestImages = action.payload;
    },
    setAnnotatedImages(state , action) {
      console.log('redux ', action.payload)
      const newArray = state.annotatedImages.filter(image => image.url !== action.payload.url)
      console.log('redux new', newArray)
      state.isLoading = false;
      state.error = null;
      state.annotatedImages = [...newArray , action.payload];
    },
    discardImage(state, action) {
      const newArray = state.annotatedImages.filter(image => image.url !== action.payload)
      console.log('redux new', newArray)
      state.annotatedImages = [...newArray ];
    },

    updateContestArray(state , action){
     
      state.isLoading = false;
      state.error = null;
      if(state.allContests.length < 1 ){

        state.allContests =[action.payload] ;
      }
      else{

        state.allContests =[...state.allContests , action.payload] ;
      }
    },

    getSingleAnalysis(state, action) {
      state.isLoading = false;
      state.error = null;
      if (action.payload) {
        state.analysis = action.payload;
      } else {
        state.analysis = null;
      }
    },
    emptyInitialAnalysis(state, action) {
      state.initialAnalysis = null;
      state.analysis = null;
    },
    emptyAnnotatedImages(state, action) {
      state.annotatedImages =[]
    },
    getAllAnalysisOfUser(state, action) {
      state.isLoading = false;
      state.error = null;
      state.allAnalysisOfUser = action.payload;
    },
    emptyStates(state, action) {
      state.isLoading = false;
      state.error = null;
      state.initialAnalysis = null;
      state.analysis = null;
      state.allAnalysisOfUser = null;
      state.notification = false;
    },
    notification(state, action) {
      console.log('action', action);
      state.notification = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions

export const { emptyInitialAnalysis, emptyStates, notification ,setAnnotatedImages ,discardImage ,emptyAnnotatedImages} = slice.actions;
// ----------------------------------------------------------------------

export function uploadDataset(images) {
  console.log('uploadDataset', images);
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('http://localhost:4001/contest/uploadDataset', images);
      // dispatch(slice.actions.initialData(response.data.analysis));
      console.log('==>',response)
      dispatch(slice.actions.stopLoading());
      return response.data
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function createContest(contest) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('http://localhost:4001/contest/createContest', contest);
      console.log( 'create contest' , response?.data)
      dispatch(slice.actions.updateContestArray(response.data));
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getAllContestOfAdmin(adminId) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`http://localhost:4001/contest/getAllContestOfAdmin/${adminId}`);
      console.log(response?.data)
      dispatch(slice.actions.setAllContests(response.data));
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getAllImagesOfContest(contestId) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`http://localhost:4001/contest/getAllImagesOfContest/${contestId}`);
      console.log(response?.data)
      dispatch(slice.actions.setContestImages(response.data));
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function startContest(annotatedImages , contestId) {
  console.log('annotatedImages' , annotatedImages)
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post(`http://localhost:4001/contest/startContest` , {
        annotatedImages,
        contestId
      });
      console.log('contest started' , response?.data)
      dispatch(slice.actions.setContestImages(response.data));
      dispatch(slice.actions.emptyAnnotatedImages());
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}


