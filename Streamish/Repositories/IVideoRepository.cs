﻿using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        List<Video> GetAll();
        List<Video> GetAllWithComments();
        Video GetById(int id);
        Video GetVideoByIdWithComments(int id);
        void Add(Video video);
        void Delete(int id);
        void Update(Video video);

        List<Video> Search(string criterion, bool sortDescending);
    }
}