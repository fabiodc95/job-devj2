<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Connection;

class MoviesController extends AbstractController
{
    #[Route('/api/movies')]
    public function list(Connection $db, Request $request): Response
    {        
        $selectedCriterion = $request->query->get('orderBy');
        $selectedGenre = $request->query->get('genre');

        if( $selectedGenre === "null") {
            $rows = $db->createQueryBuilder()
                ->select("m.*")
                ->from("movies", "m")
                ->orderBy("m.$selectedCriterion", "DESC")
                ->setMaxResults(50)
                ->executeQuery()
                ->fetchAllAssociative();
        } else {
            $rows = $db->createQueryBuilder()
                ->select('m.*', 'mg.genre_id')
                ->from("movies", "m")
                ->innerJoin('m', 'movies_genres', 'mg', 'm.id = mg.movie_id')
                ->where('mg.genre_id = :genre')
                ->setParameter('genre', $selectedGenre)
                ->orderBy("m.$selectedCriterion", "DESC")
                ->setMaxResults(50)
                ->executeQuery()
                ->fetchAllAssociative();
        }


        return $this->json([
            "movies" => $rows
        ]);
    }
}
