﻿using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        List<Video> GetAll();
        Video GetById(int id);
        void Add(Video video);
        void Delete(int id);
        void Update(Video video);
    }
}