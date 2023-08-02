//package pages;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.support.FindBy;
//import org.openqa.selenium.support.How;
//
//public class DashboardPage{
//	WebDriver driver;
//	
//	public DashboardPage(WebDriver driver) {
//		this.driver = driver;
//	}
//	
//	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[3]/a/span[1]") WebElement CustomersMenu;
//	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[3]/ul/li[1]/a") WebElement AddCustomerMenu;
//	@FindBy(how = How.XPATH, using = "//a[text()='List Customers']") WebElement ListCustomersMenu;
//	@FindBy(how = How.XPATH, using = "//h5[text()='Add Contact']") WebElement AddCustomerPageText;
//
//	public void clickCustomerMenuButton() throws InterruptedException {
//		Thread.sleep(2000);
//		CustomersMenu.click();
//	}
//	
//	public void clickAddCustomerMenuButton() {
//		AddCustomerMenu.click();
//	}
// 
//	public void clickListCustomerMenuButton() throws InterruptedException {
//		Thread.sleep(2000);
//		ListCustomersMenu.click();
//	}
//	
////	public String getAddCustomerPageTitle() {
////		return driver.getTitle();
////		}
////                   ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
//	
//	public String getAddCustomerPageText() {
//		String text = AddCustomerPageText.getText();
//		
//		return text
//					;
//		
//	}
//
//
//}
