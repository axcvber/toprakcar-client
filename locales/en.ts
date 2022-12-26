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
      desc: '​your pre-reservation has been received. The information you sent has reached our system. You will be informed by e-mail or telephone when your reservation is confirmed. We thank you. Toprakcar',
      note: 'Note',
      noteText:
        'If we do not receive a response within 24 hours, you either entered your email address incorrectly or our emails are sent to you as spam (Junk Mail). Please enter your e -mail and mark https://www.kirmizicar.com/ as a secure address. If your arrival date is within the next 24 hours, please contact us at the phone numbers below.',
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
      TRIdentity: 'TR Identity',
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

  personalInfoForm: {
    validation: {
      fullName: {
        max: 'Max 20 symbols.',
        required: 'Enter full name.',
        matches: 'Please enter a valid full name.',
      },
      idNumber: {
        required: 'Please choose a service.',
      },
      email: {
        isEmail: 'Please enter a valid email address.',
        required: 'Please enter an email address.',
      },
      phone: {
        required: 'Please enter a phone number.',
        matches: 'Please enter a valid phone number.',
      },
      message: {
        max: 'Maximum 300 characters',
      },
    },
  },
}

export default en
