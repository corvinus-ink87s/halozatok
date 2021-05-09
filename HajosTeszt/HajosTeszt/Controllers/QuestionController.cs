using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpGet]
        [Route("questions/count")]
        public int M1()
        {
            HajosTesztContext context = new HajosTesztContext();
            int kérdésekSzáma = context.Questions.Count();
            return kérdésekSzáma;
        }

        [HttpGet]
        [Route("questions/{sorszam}")]
        public ActionResult M2(int sorszam)
        {
            HajosTesztContext context = new HajosTesztContext();
            var kérdés = (from x in context.Question
                          where x.QuestionId == sorszam
                          select x).FirstOrDefault();
            if (kérdés == null)
            {
                return BadRequest("Nincs ilyen kérdés!");
            }
            return new JsonResult(kérdés);


        }

    }
}
