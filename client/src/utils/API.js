// import axios from "axios";

export default {
    getFakeData: function() {
        return {
            name: "Bob Vance",
            city: "Scranton",
            county: "Scranton",
            state: "PA",
            country: "USA",
            username: "mitchell@underwood.com",
            password: "$2a$10$ma0MBuyBvsrA0YRZKYQf6uaLJVSLITsQAKIlwQuhNs509OLV5zWe6",
            issues: [{issue: "Donuts for Breakfast", importance: true, stance: 5},{issue: "Donuts for Lunch", importance: true, stance: 3},{issue: "Donuts for Dinner", importance: true, stance: -4}]
          }
    }
};

