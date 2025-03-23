import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

interface User {
    id: number;
    name: string;
    email: string;
    address: { street: string, city: string };
};

const initialState = {
    users: [] as User[],
    loading: false,
    error: null as string | null,
};

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        return (await response.json()) as User[];
    } catch (error) {
        throw error;
    }
});

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex(u => u.id === action.payload.id);
            if (index !== -1) state.users[index] = action.payload;
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.users;
export const selectUserById = (state: RootState, id: number) => state.users.users.find(user => user.id === id);
export const selectLoading = (state: RootState) => state.users.loading;
export const selectError = (state: RootState) => state.users.error;
export default userSlice.reducer