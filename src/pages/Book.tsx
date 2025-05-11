
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Book = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredTime: "",
    isFirstVisit: false,
    dentalConcerns: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, appointmentDate: date });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= num ? "bg-primary text-white" : "bg-gray-200"
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-primary rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Choose Appointment Date</h2>
                <div className="flex justify-center mb-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="pointer-events-auto rounded-md border"
                    disabled={(date) => {
                      const day = date.getDay();
                      return day === 0 || day === 6; // Disable weekends
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <select
                    id="preferredTime"
                    className="w-full p-2 border rounded-md"
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isFirstVisit"
                    checked={formData.isFirstVisit}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        isFirstVisit: checked as boolean,
                      })
                    }
                  />
                  <Label htmlFor="isFirstVisit">This is my first visit</Label>
                </div>
                <div>
                  <Label htmlFor="dentalConcerns">
                    Please describe your dental concerns
                  </Label>
                  <textarea
                    id="dentalConcerns"
                    className="w-full p-2 border rounded-md h-32"
                    value={formData.dentalConcerns}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dentalConcerns: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <Button type="button" onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button type="button" onClick={handleNext} className="ml-auto">
                  Next
                </Button>
              ) : (
                <Button type="submit" className="ml-auto">
                  Book Appointment
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
