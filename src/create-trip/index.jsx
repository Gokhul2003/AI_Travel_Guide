import { Input } from "@/components/ui/input";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from "@/constants/options";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AIModel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import TomTomAutocomplete from "../components/TomTomAutocomplete";

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => setFormData({ ...formData, [name]: value });
  useEffect(() => console.log(formData), [formData]);

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (!formData?.location || !formData?.budget || !formData?.traveler || !formData?.noOfDays) {
      toast("Please fill all the details ✈️");
      return;
    }

    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT
      .replace("{location}", formData?.location?.label)
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const aiText = result?.response?.text();
      SaveAiTrip(aiText);
    } catch (err) {
      toast("Error generating trip from AI");
      console.error(err);
      setLoading(false);
    }
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    let parsedData;
    try {
      parsedData = JSON.parse(TripData);
    } catch (err) {
      toast("Error parsing AI response 😞");
      setLoading(false);
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: parsedData,
      userEmail: user?.email,
      id: docId,
    });

    setLoading(false);
    navigate("/view-trip/" + docId);
  };

  const login = useGoogleLogin({
    onSuccess: (res) => GetUserProfile(res),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
        headers: { Authorization: `Bearer ${tokenInfo.access_token}`, Accept: "application/json" },
      })
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        onGenerateTrip();
      })
      .catch((error) => console.error("Error fetching user profile: ", error));
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 px-5 mt-10 mb-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Plan Your Dream Trip 🌍✨
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Tell us about your travel preferences, and our AI will craft the perfect itinerary just for you.
        </p>
      </div>

      {/* Input Section */}
      <div className="flex flex-col gap-10 bg-white shadow-lg rounded-3xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
        {/* Destination */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            🏖️ Where do you want to go?
          </h2>
          <TomTomAutocomplete
            place={place}
            setPlace={(v) => {
              setPlace(v);
              handleInputChange("location", v);
            }}
          />
        </div>

        {/* Days */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            🗓️ How many days are you planning?
          </h2>
          <Input
            placeholder="e.g. 4"
            type="number"
            className="border-gray-300 focus:ring-2 focus:ring-orange-400 transition-all"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        {/* Budget */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            💰 What's your budget range?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-5 border rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-orange-400 ${
                  formData?.budget === item.title && "shadow-xl border-orange-500 bg-orange-50"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg mt-2">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Traveler */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            👥 Who are you traveling with?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveler", item.people)}
                className={`p-5 border rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-pink-400 ${
                  formData?.traveler === item.people && "shadow-xl border-pink-500 bg-pink-50"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg mt-2">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="my-12 flex justify-center">
        <Button
          disabled={loading || !formData?.location}
          onClick={onGenerateTrip}
          className="px-10 py-5 text-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-white rounded-2xl shadow-lg transition-all duration-300 flex items-center gap-3"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            <>
              🚀 Generate My Trip
            </>
          )}
        </Button>
      </div>

      {/* Google Login Dialog */}
      <Dialog open={openDialog}>
        <DialogContent className="rounded-2xl p-6">
          <DialogHeader>
            <DialogDescription className="text-center">
              <img src="/logo.svg" alt="logo" width="100px" className="mx-auto mb-4" />
              <h2 className="font-bold text-2xl text-gray-800">Sign In Required 🔐</h2>
              <p className="text-gray-500 mt-2 mb-5">
                Sign in with Google to securely generate and view your personalized travel plan.
              </p>
              <Button
                onClick={login}
                className="w-full flex gap-4 items-center justify-center bg-white border hover:bg-gray-50 text-gray-700 rounded-xl shadow-md"
              >
                <FcGoogle className="h-7 w-7" />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
