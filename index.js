const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);

main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
}

app.get("/", (req, res) => {
  res.send("Hello World");
});


// New
app.get("/listings/new", (req, res) => {
  res.render("listings/new", { title: "New Listing" });
});

// Create
app.post("/listings", async (req, res) => {
  const listing = new Listing(req.body.listing);
  await listing.save();
  res.redirect(`/listings/${listing._id}`);
});

// Listings
app.get("/listings", async (req, res) => {
  const listings = await Listing.find();
  res.render("listings/index", { listings, title: "Listings" });
});

// Details
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show", { listing, title: listing.title });
});

// Edit
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit", { listing, title: `Edit` });
});

// Update
app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const { listing } = req.body;
  const editedListing = await Listing.findByIdAndUpdate(
    id,
    { ...listing },
    {
      runValidators: true,
      new: true,
    }
  );
  res.redirect(`/listings/${editedListing._id}`);
});

// Delete
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
