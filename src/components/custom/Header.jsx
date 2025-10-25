import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const login = useGoogleLogin({
    onSuccess: (res) => getUserProfile(res),
    onError: (error) => console.log(error),
  });

  const getUserProfile = (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
        headers: { Authorization: `Bearer ${tokenInfo.access_token}`, Accept: "application/json" },
      })
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setUser(resp.data);
        setOpenDialog(false);
      })
      .catch((error) => console.error("Error fetching user profile: ", error));
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <div className="shadow-sm flex justify-between items-center px-6 py-3 bg-white sticky top-0 z-50">
      {/* Logo */}
      <img
        src="/logo.svg"
        alt="Logo"
        className="h-12 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Navigation / User */}
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-full" onClick={() => navigate("/create-trip")}>
              + Create Trip
            </Button>
            <Button variant="outline" className="rounded-full" onClick={() => navigate("/my-trips")}>
              My Trips
            </Button>

            <Popover>
              <PopoverTrigger>
                <img src={user?.picture} alt="" className="h-10 w-10 rounded-full cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className="cursor-pointer">
                <h2 onClick={handleLogout}>Logout</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      {/* Google Login Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="flex flex-col items-center gap-4">
              <img src="/logo.svg" alt="logo" width="100px" />
              <h2 className="font-bold text-lg">Sign In to check out your travel plan</h2>
              <p>Sign in to the App with Google authentication securely</p>
              <Button onClick={login} className="w-full mt-4 flex gap-3 items-center justify-center">
                <FcGoogle className="h-7 w-7" /> Sign in With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
