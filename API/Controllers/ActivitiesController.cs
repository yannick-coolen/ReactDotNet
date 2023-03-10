using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly IMediator _mediator;

        [HttpGet] //api/activities 
        public async Task<IActionResult> GetActivities()
            => HandleResult(await Mediator.Send(new List.Query()));

        [HttpGet("{id}")] //api/activities/:id
        public async Task<IActionResult> GetActivity(Guid id)
            => HandleResult(await Mediator.Send(new Details.Query { Id = id }));

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
            => HandleResult(await Mediator.Send(new Create.Command { Activity = activity }));

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
            => HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
    }
}