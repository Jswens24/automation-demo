const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/movie-list/index.html')
})


afterAll(async () => {
    await (await driver).quit()
})

test('able to add a movie to the list', async () => {
    await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]')).sendKeys('Billy Madison');
    await driver.findElement(By.xpath('//button[text()="Add"]')).click();
    const movie = driver.findElement(By.xpath('//span[text()="Billy Madison"]'))

    const isDisplayed = await movie.isDisplayed();
    expect(isDisplayed).toBeTruthy();

})
