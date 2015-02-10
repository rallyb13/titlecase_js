describe("titleCase", function() {
  it("capitalizes the first letter of a single word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes each word in a multi-word title", function() {
    expect(titleCase("oliver twist")).to.equal("Oliver Twist");
  });

  it("ignores prepositions, coordinating conjunction, and articles", function() {
    expect(titleCase("thelma and louise")).to.equal("Thelma and Louise");
  });

  it("will still capitalize the first word, no matter what word it is", function() {
    expect(titleCase("the sun also passes out")).to.equal("The Sun Also Passes Out");
  });
});
