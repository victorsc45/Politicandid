export default {
    getLoginUser: function () {
        return {
            id: 1,
            name: "Mitchell Underwood",
            county: "Wake",
            state: "NC",
            Country: "USA",
            ZIP: "27612",
            Issues: [
                {
                    Issue: "Net Neutrality",
                    Important: true,
                    Stance: 0
                },
                {
                    Issue: "Economy",
                    Important: false,
                    Stance: 5
                },
                {
                    Issue: "China Tariff",
                    Important: true,
                    Stance: -5
                }
            ],
            Candidate: true,
            Campaign: {
                level: "County",
                body: "School Board",
                office: "School Board Member"
            }
        }
    },
    getResults: function () {
        return [
            { name: "Matt Neal", id: 3 },
            { name: "Bob Smith", id: 8 },
            { name: "Carl Jones", id: 6 }
        ]
    }

};
