using Microsoft.AspNetCore.Mvc;
using TalkHub.ViewModels;

namespace TalkHub.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel model)
        {
            Console.WriteLine("Попытка авторизации");
            Console.WriteLine(model.Login);
            Console.WriteLine(model.Password);

            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            Console.WriteLine("Попытка регистрации");
            Console.WriteLine(model.Login);
            Console.WriteLine(model.Email);
            Console.WriteLine(model.Password);

            return View();
        }
    }
}
