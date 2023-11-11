const PatentdApp = artifacts.require("PatentdApp");

contract("PatentdApp", (accounts) => {
    it("should allow registering patents", async () => {
        const patentInstance = await PatentdApp.deployed();

        // Perform actions to test patent registration and retrieval.
        // For example, you can call functions on patentInstance and assert results.
        
        const patentCount = await patentInstance.numberOfPatents();
        assert.equal(patentCount, 0, "Initial number of patents should be 0.");
    });
});
