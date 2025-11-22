import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useAuth } from "../hooks/use-auth"; // Assuming useAuth hook exists
import { supabase } from "@/lib/supabase"; // Assuming supabase is configured
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  // Hardcoded product details
  const drelfProduct = {
    id: "1_drelf",
    name: "1 Drelf",
    price: "IDR 600,000",
  };

  useEffect(() => {
    if (user) {
      setUserEmail(user.email || "");
      setCurrentUserId(user.id);
    } else {
      setUserEmail("");
      setCurrentUserId(null);
    }
  }, [user]);

  const paymentMethods = [
    { id: "QRIS", label: "QRIS", method: "QRIS" },
    { id: "BCA", label: "Bank Transfer (BCA)", method: "BCAVA" },
  ];

  const handlePayment = async () => {
    if (!selectedPaymentMethod) {
      toast({
        title: "Error",
        description: "Please select a payment method.",
        variant: "destructive",
      });
      return;
    }

    if (!userName || !userEmail || !phoneNumber || !currentUserId) {
      toast({
        title: "Error",
        description: "Please ensure all your details are filled and you are logged in.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      toast({
        title: "Error",
        description: "User not authenticated. Please log in.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    const accessToken = session.access_token;

    try {
      const payload = {
        subscriptionType: drelfProduct.id,
        paymentMethod: selectedPaymentMethod,
        userName,
        userEmail,
        phoneNumber,
        userId: currentUserId,
      };

      const response = await fetch("/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log("Raw server response:", responseText);

      const data = JSON.parse(responseText);

      if (data.success) {
        // Assuming a similar /payload page exists in drelf
        navigate("/payload", { state: { paymentDetails: data } });
      } else {
        toast({
          title: "Payment Error",
          description: data.error || "Failed to initiate payment.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
      if (error instanceof SyntaxError) {
        console.error("Server returned non-JSON response, see 'Raw server response' log above.");
      }
      toast({
        title: "Error",
        description: "An unexpected error occurred. Check the console for details.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-24 pt-8 px-4 bg-gray-900 text-white">
      <Toaster />
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-purple-300">
            Complete Your Drelf Purchase
          </h1>
          <p className="font-sans text-lg text-gray-400 max-w-2xl mx-auto">
            You are one step away from unlocking a new experience.
          </p>
        </div>

        {/* User Information */}
        <Card className="bg-gray-800 border-gray-700 p-8 mb-8 text-left">
          <h2 className="font-serif text-2xl font-bold mb-4 text-purple-300">Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="userName" className="text-gray-300">Name</Label>
              <Input
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your Name"
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="userEmail" className="text-gray-300">Email</Label>
              <Input
                id="userEmail"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="your@example.com"
                disabled
                className="text-yellow-400 bg-gray-700 border-gray-600"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="phoneNumber" className="text-gray-300">Phone Number</Label>
            <Input
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g., +628123456789"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
        </Card>

        {/* Product Details */}
        <Card className="bg-gray-800 border-gray-700 p-8 mb-8 text-left">
            <h2 className="font-serif text-2xl font-bold mb-4 text-purple-300">Order Summary</h2>
            <div className="flex justify-between items-center">
                <span className="font-sans text-xl font-semibold text-gray-200">{drelfProduct.name}</span>
                <span className="font-sans text-xl text-gray-300">{drelfProduct.price}</span>
            </div>
        </Card>

        {/* Payment Methods */}
        <Card className="bg-gray-800 border-gray-700 p-8 mb-8 text-left">
            <h2 className="font-serif text-2xl font-bold mb-4 text-purple-300">Select Payment Method</h2>
            <RadioGroup
              onValueChange={setSelectedPaymentMethod}
              value={selectedPaymentMethod || ""}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {paymentMethods.map((method) => (
                <div key={method.id}>
                  <RadioGroupItem value={method.method} id={method.id} className="sr-only" />
                  <Label
                    htmlFor={method.id}
                    className={`flex flex-col items-center justify-between rounded-md border-2 border-gray-600 bg-gray-700 p-4 hover:bg-gray-600 hover:text-white cursor-pointer ${
                      selectedPaymentMethod === method.method ? "border-purple-400 ring-2 ring-purple-400" : ""
                    }`}
                  >
                    <span className="font-sans text-base font-medium">{method.label}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
        </Card>

        {/* Purchase Button */}
        <div className="text-center mb-8">
          <Button
            size="lg"
            className="font-sans px-10 py-6 rounded-xl text-lg bg-purple-600 hover:bg-purple-700 text-white animate-pulse"
            onClick={handlePayment}
            disabled={isLoading || !selectedPaymentMethod || !currentUserId}
          >
            {isLoading ? "Processing..." : "Purchase Now"}
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-gray-500">
            © 2025 Drelf by <span className="text-purple-400 font-semibold">eL Vision Group</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
