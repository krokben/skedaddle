import mongoose, { Schema } from "mongoose";

export interface User extends Document {
  name: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true }
});

export default mongoose.model<User>("User", UserSchema);
