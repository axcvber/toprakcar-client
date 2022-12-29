const en = {
  navLinks: [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Fleet',
      path: '/fleet',
    },
    {
      label: 'Shop',
      path: '/shop',
    },
    {
      label: 'About Us',
      path: '/about-us',
    },
    {
      label: 'Insurance',
      path: '/insurance',
    },
  ],
  button: {
    search: 'Search',
    moreVehicles: 'More Vehicles',
    rentNow: 'Rent Now',
    select: 'Select',
    moreInfo: 'More Info',
    explore: 'Explore',
    back: 'Back',
    readyToBuy: "Ready to buy? Here's how it works.",
    getStarted: 'Get started',
    submit: 'Submit',
    geTrafficInsuranceOffers: 'Get Traffic Insurance Offers',
    loading: 'Sending...',
    continue: 'Continue',
    showResults: 'Show Results',
    changeSearch: 'Change Search',
  },
  links: {
    terms: 'Terms & Conditions',
    clearAll: 'Clear all',
  },
  filter: {
    title: 'Filter by',
    rentCost: 'Rental cost (per day)',
    carCost: 'Car cost',
    usedCars: 'Used Cars',
    newCars: 'New Cars',
    brands: 'Brands',
    vehicleClass: 'Vehicle Class',
    bodyStyle: 'Body Style',
    fuelType: 'Fuel Type',
    transmission: 'Transmission',
    mileage: 'Mileage',
    year: 'Year',
    exteriorColor: 'Exterior Color',
    interiorColor: 'Interior Color',
  },
  filterNav: {
    result: 'Result',
    filters: 'Filters',
    sortBy: {
      recommended: 'Recommended',
      newestInventory: 'Newest Inventory',
      lowestPrice: 'Lowest Price',
      highestPrice: 'Highest Price',
    },
  },
  shopSingle: {
    vehicleDetails: 'Vehicle Details',
    overview: 'Overview',
    features: 'Features',
  },
  reservation: {
    stepLabels: ['Ride Details', 'Choose a Vehicle', 'Contact Details', 'Booking Summary'],
    prepareReservation: 'Prepare Reservation',
    rideDetails: 'Ride Details',
    pickUp: 'Pick Up',
    dropOff: 'Drop Off',
    summary: {
      title: 'Summary',
      daysNum: 'Number of Days',
      rentPrice: 'Renting price',
      extras: 'Extras',
      totalAmount: 'Total amount',
      vehicle: 'Vehicle',
    },
    additionalServices: {
      title: 'Additional services',
      dailyPrice: 'Price per day',
      yes: 'Yes',
      no: 'No',
    },
    personalInformation: 'Personal information',
    bookingSummary: {
      title: 'Thanks for your order!',
      desc: '​Your pre-reservation has been received. The information you sent has reached our system. You will be informed by e-mail or telephone when your reservation is confirmed. We thank you.',
      note: 'Note',
      noteText:
        "If you haven't heard back within 24 hours, you've either entered your email address incorrectly, or our emails are going into spam. If your arrival date is within the next 24 hours, please contact us at the numbers below.",
    },
  },
  insurance: {
    tabs: {
      hasPlate: 'I have a license plate',
      hasNotPlate: "I don't have a license plate",
    },
    stepLabels: ['Basic Information', 'Vehicle Information', 'Contact Information', 'Submission'],
    addStepLabel: 'License Information',
    vehicleSelectStep: {
      title: 'Enter vehicle information',
      desc: 'The vehicle information you share will always be safe with Toprakcar.',
    },
    vehicleInfoStep: {
      title: 'License information',
      desc: 'All the information you save is always safe with Toprakcar.',
      banner: {
        title: "Don't have a license?",
        fistLine: 'You can access license information via e-government',
        secondLine: 'You can log in to e-government using your internet banking user information',
      },
    },
    contactInfoStep: {
      title: 'Enter your contact information',
      desc: 'All the information you save is always safe with Toprakcar.',
    },
    formSubmissionStep: {
      title: 'Thank you for choosing Toprakcar',
      desc: 'Our managers will contact you shortly',
    },
  },
  aboutPage: {
    contacts: 'Contacts',
  },
  forms: {
    labels: {
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      min: 'Min',
      max: 'Max',
      nationality: 'Nationality',
      TCnumber: 'TC Identification number',
      passportIdNumber: 'Passport ID number',
      additionalNote: 'Additional Note',
      isTurk: 'I am a Turkish citizen',
      notTurk: 'I am not Turkish citizen',
      licensePlate: 'License plate',
      TRIdentity: 'TC Identity',
      brand: 'Brand',
      year: 'Year',
      model: 'Model',
      licenseSerial: 'License Serial',
      licenseNumber: 'License Number',
    },
    placeholders: {
      chooseLocation: 'Choose a location',
      pickUpLocation: 'Pick-up Location',
      dropOffLocation: 'Drop Off Location',
      pickupDate: 'Pick-up date',
      returnDate: 'Return date',
      message: 'Message',
    },
    termsOfService: 'I Have Read and Approve',
    carPurchase: {
      title: 'Contact Info',
      desc: 'Enter your contact information and our managers will contact you shortly',
    },
  },
  footer: {
    explore: 'Explore',
    workHours: 'Our working hours',
    contactUs: 'Contact Us',
    rights: 'All rights reserved.',
    createdBy: 'Created by',
    footerLinks: [
      {
        label: 'Terms of Use',
        path: '/terms',
      },
      {
        label: 'Privacy Policy',
        path: '/privacy-policy',
      },
      {
        label: 'Cookie Policy',
        path: '/cookie-policy',
      },
    ],
  },

  page404: {
    title: 'Ooops! Page not found',
    subtitle: "This page doesn't exist or was removed",
    btn: 'Back to Home',
  },

  validation: {
    required: 'Required field',
    search: {
      required: 'Select search details',
      pickUpLocation: {
        required: 'Select a pickup location',
      },
      pickUpDate: {
        min: 'Choose a future date',
        required: 'Choose a pickup date',
      },
      dropOffDate: {
        min: 'The end date must be after the start date',
        required: 'Choose a return date',
      },
    },
    personalInfo: {
      fullName: {
        max: 'Max 20 symbols',
        matches: 'Please enter a valid Full Name',
      },
      idNumber: {
        incorrectTC: 'Incorrect TC Identification number',
        incorrectPasswordNum: 'Incorrect Passport Number',
      },
      email: {
        isEmail: 'Please enter a valid email address',
      },
      phone: {
        matches: 'Please enter a valid phone number',
      },
      message: {
        max: 'Maximum 300 characters',
      },
    },
    insurance: {
      licensePlate: {
        incorrect: 'Incorrect License Plate',
      },
      vehicleSelect: {
        min: 'The minimum value 1970',
        max: 'Enter the correct year of issue',
      },
      vehicleInfo: {
        licenseSerial: {
          incorrect: 'Incorrect License Serial',
        },
        licenseNumber: {
          incorrect: 'Incorrect License Number',
          minMax: 'Must be exactly 6 digits',
        },
      },
    },
  },
  notistack: {
    successSubmit: 'Form successfully submitted',
    errorSubmit: 'An error occurred, please try again later',
  },
}

export default en
