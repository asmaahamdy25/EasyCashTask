import RateController from "@/controllers/rateController.js";

export default {
  name: "Exchangerate",
  data() {
    return {
      fromValue: "",
      toValue: "",
      currencyArray: "",
      currencyRate: {},
      to_currency: "USD",
      from_currency: "EGP"
    };
  },
  methods: {
    convert: () => {
      const rate = this.currencyRate[`${this.to_currency}`];
      this.toValue = this.fromValue * rate;
    }
  },
  created() {
    RateController.getAllRates().then(res => {
      this.currencyRate = res.data.rates;
      this.currencyArray = Object.keys(res.data.rates);
    });
  }
};
