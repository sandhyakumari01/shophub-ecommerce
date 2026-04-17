"use client";

import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

interface Props {
  form: any;
  onChange: (e: any) => void;
  onSave: () => void;
  onClose: () => void;
}

export default function EditProfileModal({
  form,
  onChange,
  onSave,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 space-y-4">

        <h2 className="text-xl font-semibold text-center">Edit Profile</h2>

        {/* NAME */}
        <Input
          name="name"
          value={form.name ?? ""}
          onChange={onChange}
          placeholder="Full Name"
          className="py-5 rounded-md"
        />

        <Input
          name="email"
          value={form.email ?? ""}
          onChange={onChange}
          placeholder="Email"
          className="py-5 rounded-md"
        />

        <Input
          name="number"
          value={form.number ?? ""}
          onChange={onChange}
          placeholder="Phone"
          className="py-5 rounded-md"
        />

        <Select
          value={form.gender ?? ""}
          onValueChange={(val: any) =>
            onChange({ target: { name: "gender", value: val } })
          }
        >
          <SelectTrigger className="w-full py-5 rounded-md" >
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="date"
          name="dob"
          value={form.dob ?? ""}
          onChange={onChange}
          className="py-5 rounded-md"
        />

        <Textarea
          name="bio"
          value={form.bio ?? ""}
          onChange={onChange}
          placeholder="Bio"
          className="rounded-md"
        />


        <div className="flex justify-end gap-2 pt-2 ">
          <Button variant="outline" onClick={onClose} className="py-5 cursor-pointer">
            Cancel
          </Button>

          <Button onClick={onSave} className="py-5 cursor-pointer">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}