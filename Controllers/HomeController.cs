using Microsoft.AspNetCore.Mvc;
using Mission5.Models;
using System.Diagnostics;

namespace Mission5.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "MTG Hobby – Mission 5";
            return View();
        }

        public IActionResult Tutor()
        {
            ViewData["Title"] = "MTG Tutoring Calculator – Mission 5";
            return View();
        }
    }
}