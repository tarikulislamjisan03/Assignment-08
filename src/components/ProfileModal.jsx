"use client";

import { authClient } from "@/lib/authclient";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function ProfileModal() {
  const handlemodal = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <Modal>
      <Button variant="secondary" className="w-full sm:w-auto text-sm font-semibold rounded-xl py-2.5">
        Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="center" className="p-4 sm:p-0">
          <Modal.Dialog className="w-full max-w-full sm:max-w-md bg-[#141412] border border-zinc-800 text-white rounded-2xl overflow-hidden shadow-2xl">
            <Modal.CloseTrigger className="text-zinc-400 hover:text-white transition-colors" />
            <Modal.Header className="flex flex-col items-center pt-6 pb-2 px-6">
              <Modal.Icon className="bg-lime-950/50 text-lime-400 border border-lime-900/50 p-3 rounded-xl mb-3">
                <Envelope className="w-6 h-6" />
              </Modal.Icon>
              <h3 className="text-xl font-bold text-zinc-100">Edit Profile</h3>
            </Modal.Header>
            <Modal.Body className="p-4 sm:p-6 pt-0">
              <Surface variant="default" className="bg-transparent border-0 p-0 shadow-none">
                <form onSubmit={handlemodal} className="flex flex-col gap-5">
                  <TextField className="w-full flex flex-col gap-1.5" name="name" type="text" variant="secondary">
                    <Label className="text-zinc-300 text-sm font-medium">Name</Label>
                    <Input 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-lime-500 transition-colors text-sm placeholder:text-zinc-500"
                    />
                  </TextField>
                  <TextField className="w-full flex flex-col gap-1.5" name="image" type="text" variant="secondary">
                    <Label className="text-zinc-300 text-sm font-medium">Image URL</Label>
                    <Input 
                      placeholder="https://image.com/avatar.jpg" 
                      className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-lime-500 transition-colors text-sm placeholder:text-zinc-500"
                    />
                  </TextField>
                  <Modal.Footer className="flex flex-col-reverse sm:flex-row gap-3 mt-4 border-t border-zinc-800/60 pt-4 w-full">
                    <Button 
                      slot="close" 
                      variant="secondary"
                      className="w-full sm:flex-1 py-2.5 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-xl text-sm font-semibold transition-colors h-11"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      slot="close"
                      className="w-full sm:flex-1 py-2.5 bg-lime-600 hover:bg-lime-700 text-white rounded-xl text-sm font-semibold transition-colors h-11"
                    >
                      Update
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}